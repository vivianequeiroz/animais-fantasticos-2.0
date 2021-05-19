export default class Tooltip {
  constructor(tooltips) {
    this.tooltips = document.querySelectorAll(tooltips);

    // bind objeto da classe para os callbacks
    this.onMouseLeave = this.onMouseLeave.bind(this);
    this.onMouseMove = this.onMouseMove.bind(this);
    this.onMouseOver = this.onMouseOver.bind(this);
  }

  onMouseMove(event) {
    this.tooltipBox.style.top = `${event.pageY + 20}px`;
    this.tooltipBox.style.left = `${event.pageX + 20}px`;
  }

  onMouseLeave(event) {
    this.tooltipBox.remove();
    event.currentTarget.element.removeEventListener('mouseleave', this.onMouseLeave);
    event.currentTarget.element.removeEventListener('mousemove', this.onMouseMove);
  }

  criarTooltipBox(element) {
    const tooltipBox = document.createElement('div');
    const text = element.getAttribute('aria-label');
    tooltipBox.classList.add('tooltip');
    tooltipBox.innerText = text;
    document.body.appendChild(tooltipBox);
    this.tooltipBox = tooltipBox;
  }

  onMouseOver(event) {
    this.criarTooltipBox(event.currentTarget);
    this.currentTarget('mousemove', this.onMouseMove);
    this.currentTarget('mouseleave', this.onMouseLeave);
  }

  addTooltipsEvent() {
    this.tooltips.forEach((item) => {
      item.addEventListener('mouseover', this.onMouseOver);
    });
  }

  init() {
    if (this.tooltips.length) {
      this.addTooltipsEvent();
    }
    return this;
  }
}
