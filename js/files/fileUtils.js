let fileUtils = {
  listDir: function() {
    console.log(filesystem)
    return Object.keys(filesystem)
  },
  dumpFile: function(file) {
    console.log(filesystem[file])
    return filesystem[file]
  },
}