
// Q4 - Custom Form Builder

class FormBuilder {
  constructor(fields, container) {
    this.fields = fields;
    this.container = container;
    this.form = document.createElement("form");
    this.render();
  }

  render() {
    this.fields.forEach(f => {
      const div = document.createElement("div");
      const label = document.createElement("label");
      label.textContent = f.label;

      const input = document.createElement("input");
      input.type = f.type;
      input.name = f.label.toLowerCase();

      div.append(label);
      div.append(input);
      this.form.append(div);
    });

    const btn = document.createElement("button");
    btn.type = "button";
    btn.textContent = "Submit";
    btn.onclick = () => console.log(this.getFormData());

    this.form.append(btn);
    this.container.append(this.form);
  }

  getFormData() {
    const data = {};
    [...this.form.elements].forEach(el => {
      if (el.name) data[el.name] = el.value;
    });
    return data;
  }
}
