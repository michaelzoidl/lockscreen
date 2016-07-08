import { exec } from 'child_process';

export default (cb, customCommands) => {
  const lockCommands = customCommands || {
    darwin: '/System/Library/CoreServices/"Menu Extras"/User.menu/Contents/Resources/CGSession -suspend'
  }

  if(Object.keys(lockCommands).indexOf(process.platform) === -1) {
    throw new Error(`lockscreen doesn't support your platform (${process.platform})`);
  } else {
    exec(lockCommands[process.platform], (err, stdout) => cb ? cb(err, stdout) : null);
  }
}
