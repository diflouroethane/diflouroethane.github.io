let commands = {
  parseCommand: function(command) {
    switch (command) {
      case "help":
        commands.help()
        break;
      case "ls":
        commands.ls()
        break;
      case "pwd":
        commands.pwd()
      case "":
        break;
      default:
        if (command.startsWith("cat ")) {
          commands.cat(command.substring(4))
        // }else if (command.startsWith("cd ")) {
        //   commands.cd(command.substring(3))
        } else {
          util.prnt(`invalid command: ${command}. try the 'help' command instead.`)
        }
        break;
  }
  },
  ls: function() {
    util.unsafePrnt(fileUtils.listDir())
  },
  cat: function(file) {
    util.unsafePrnt(fileUtils.dumpFile(file))
  },
  // cd: function(dir, noprev = false) {
  //   console.log("cd", dir, noprev)
  //   if (dir == "..") {
  //     console.log("ooh")
  //     // console.log(fileUtils.prev.pop())
  //     // filesystem.pwd = dir
  //     commands.cd(fileUtils.prev.pop(), noprev = true)
  //   } else if (noprev && filesystem[dir] != undefined) {
  //     fileUtils.pwd = dir
  //   }else if (filesystem[fileUtils.pwd][dir] != undefined) {
  //     if (!noprev) {
  //       fileUtils.prev.push(fileUtils.pwd)
  //       console.log("prev pushed")
  //     }
  //     console.log(fileUtils.prev)
  //     fileUtils.pwd = dir
  //   } else {
  //     util.unsafePrnt("uhhh not an existent dir lol")
  //   }
  // },
  pwd: function() {
    console.log(filesystem[fileUtils.pwd], fileUtils.pwd)
  },
  help: function() {
    util.unsafePrnt("help command ran.<br>all commands are as follows:<br>ls: lists directory<br>cat [filename]: prints the contents of a file (like <code>about.txt</code>!! try it!)")
  },
}