import { expect } from 'chai';
import lockscreen from './';

describe('LockScreen', () => {
  const platform = process.platform;

  beforeEach(() => {
    Object.defineProperty(process, 'platform', {
      value: 'dummyOS'
    });
  });

  afterEach(() => {
    Object.defineProperty(process, 'platform', {
      value: platform
    });
  });

  it('returns the stdout of the defined command for the platform', (done) => {
    lockscreen((err, stdout) => {
      expect(stdout.replace('\n','')).to.equal(process.version);
      done();
    }, {
      dummyOS: 'node -v'
    });
  });

  it('throws an error if the command for the current platform is not available', () => {
    expect(() => {
      lockscreen((err, stdout) => {}, {
        notAvailableOS: 'this command should not be executed since "process.platform" isn`t "notAvailableOS"'
      });
    }).to.throw(Error);
  });
});
