const output = document.getElementById("output")

let util = {
  prnt: function(string) {
    output.innerHTML += `<div>${util.unsafe(string)}</div>`
  },
  unsafe: function(string){
    return string.replace(/&/g, '&amp;')
                 .replace(/</g, '&lt;')
                 .replace(/>/g, '&gt;')
                 .replace(/"/g, '&quot;')
                 .replace(/'/g, '&#39;')
  },
  unsafePrnt: function(string) {
    output.innerHTML += `<div>${string}</div>`
  }
}