let fileUtils = {
  pwd: "basedir",
  listDir: function() {
    console.log(filesystem)
    return Object.keys(filesystem[fileUtils.pwd]).join("<br>")
  },
  dumpFile: function(file) {
    console.log(filesystem[fileUtils.pwd][file])
    return filesystem[fileUtils.pwd][file]
  },
}