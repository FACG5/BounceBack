import * as d3 from "d3";
export const colors = [
  "#DC712D",
  "#FF8A00",
  "#96A5C5",
  "#8D81A5",
  "#743C6A",
  "#A95752"
];

export const makePie = (sections, tag) => {
  const svgWidth = 600,
    svgHeight = 400,
    radius = Math.min(svgWidth, svgHeight) / 2;

  const svg = d3
    .select(tag)
    .attr("width", svgWidth)
    .attr("height", svgHeight);

  const group = svg
    .append("g")
    .attr("transform", `translate(${radius},${radius})`);

  const pie = d3.pie().value(d => d.percentage);

  const path = d3
    .arc()
    .outerRadius(radius)
    .innerRadius(radius - 60);

  const arc = group
    .selectAll("arc")
    .data(pie(sections))
    .enter()
    .append("g");

  arc
    .append("path")
    .attr("d", path)
    .attr("fill", (d, i) => colors[i]);

  let label = d3
    .arc()
    .outerRadius(radius)
    .innerRadius(radius - 50);

  arc
    .append("text")
    .attr("transform", function(d) {
      return "translate(" + label.centroid(d) + ")";
    })
    .attr("text-anchor", "middle")
    .text(function(d) {
      return `${d.data.percentage} %`;
    })
    .style("font-size", "15px")
    .style("fill", "white")
    .style("cursor", "pointer")
    .append("svg:title")
    .text(function(d) {
      return d.data.title;
    });
};
