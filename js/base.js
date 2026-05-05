const inputarea = document.getElementById("inputarea");

inputarea.addEventListener("keydown", (e) => {
  console.log(e.key)
  if (e.key === "Enter") {
    const command = inputarea.value.trim();
    util.prnt(`you@my-website $ ${command}`);
    inputarea.value = "";
    window.scrollTo(0, document.body.scrollHeight);
    commands.parseCommand(command)
    commands.prevIndex = 0
  } else if (e.key === "ArrowUp") {
    commands.prevIndex+=1
    console.log(commands.prevIndex)
    console.log(commands.prevCommands[commands.prevCommands.length - commands.prevIndex])
    inputarea.value = commands.prevCommands[commands.prevCommands.length - commands.prevIndex]
  }
});
window.addEventListener("DOMContentLoaded", () => {
  util.unsafePrnt(`+--------------------------+
                   | Welcome to my portfolio! |
                   +--------------------------+
                   P.S.: TRY to run <code>blog</code>!`.replaceAll("\n", "<br>"))

})
  

