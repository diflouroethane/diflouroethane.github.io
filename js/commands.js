let commands = {
  parseCommand: function(command) {
    switch (command) {
      case "help":
        commands.help()
        break;
      case "ls":
        commands.ls()
        break;
      case "":
        break;
      default:
        if (command.startsWith("cat ")) {
          commands.cat(command.substring(4))
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
  help: function() {
    util.unsafePrnt("you ran the help command! this should show!!")
  },
  
}