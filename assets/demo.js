/* v2.0.0 | © 2026 Nathaniel Schroeder. All rights reserved.
   Showcase-only fixed synthetic cases. Not the private underwriting engine. */
(function () {
  "use strict";
  const cases = [
    { id:"synthetic-001", label:"Attachment sample", title:"Fictional fixed attachment",
      type:"Equipment accessory | illustrative example",status:"HOLD",statusClass:"",
      ask:"$1,500",resale:"$2,100 to $2,650",gross:"Not verified",
      missing:["Unit ownership evidence","Condition confirmation","Matched completed-sale comparables"],
      explanation:"An attractive spread on paper is not evidence of a completed profitable resale. Missing source and condition proof leave this fictional case on hold." },
    { id:"synthetic-002",label:"Vehicle sample",title:"Fictional used crossover",
      type:"Vehicle | illustrative example",status:"INVESTIGATE",statusClass:"review",
      ask:"$7,450",resale:"Insufficient support",gross:"Pending evidence",
      missing:["Title and lien confirmation","Inspection findings","Current comparable sold results"],
      explanation:"The next action is additional evidence collection, not a binding offer. No valuation should be promoted from an incomplete record." },
    { id:"synthetic-003",label:"Loader sample",title:"Fictional compact loader",
      type:"Powered equipment | illustrative example",status:"REJECT",statusClass:"reject",
      ask:"$32,900",resale:"Not established",gross:"Not supported",
      missing:["Verified hours and service history","Configuration evidence","Independent cost estimates"],
      explanation:"This sample demonstrates a rejected candidate state. Powered equipment is not within the initial bounded acquisition policy described in this public concept." }
  ];
  if (typeof module !== "undefined" && module.exports) module.exports = {cases};
  if (typeof document === "undefined") return;
  const $ = (id) => document.getElementById(id);
  const buttons = $("case-buttons");
  if (!buttons) return;
  const fields = ["case-name","case-context","case-ask","case-resale","case-gross","case-status","case-missing","case-explanation"];
  if (!fields.every(id => $(id))) return;
  function render(record) {
    $("case-name").textContent = record.title;
    $("case-context").textContent = record.type;
    $("case-ask").textContent = record.ask;
    $("case-resale").textContent = record.resale;
    $("case-gross").textContent = record.gross;
    $("case-status").textContent = record.status;
    $("case-status").className = "status " + record.statusClass;
    $("case-explanation").textContent = record.explanation;
    const ul = $("case-missing");
    ul.replaceChildren();
    for (const item of record.missing) {
      const li = document.createElement("li");
      li.textContent = item;
      ul.appendChild(li);
    }
    for (const button of buttons.querySelectorAll("button")) {
      const active = button.dataset.case === record.id;
      button.classList.toggle("selected",active);
      button.setAttribute("aria-pressed",String(active));
    }
  }
  for (const record of cases) {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "casebutton";
    button.dataset.case = record.id;
    const title = document.createElement("b");
    title.textContent = record.label;
    const sub = document.createElement("span");
    sub.textContent = record.status + " | SYNTHETIC";
    button.append(title,sub);
    button.addEventListener("click",() => render(record));
    buttons.appendChild(button);
  }
  render(cases[0]);
})();
