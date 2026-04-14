const inputarea = document.getElementById("inputarea");

inputarea.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    const command = inputarea.value.trim();
    util.prnt(`you@my-website $ ${command}`);
    inputarea.value = "";
    window.scrollTo(0, document.body.scrollHeight);
    commands.parseCommand(command)
  }
});


