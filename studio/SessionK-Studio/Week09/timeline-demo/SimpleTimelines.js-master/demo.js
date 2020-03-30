const DATA = [
  {
    year: "2018",
    title: "This is a test title",
    image: "march10-images/DSC_0107.JPG"
  },
  {
    year: "2018",
    title: "This is a test title 2",
    image: "march10-images/DSC_0110.JPG"
  },
  {
    year: "2019",
    title: "This is a test title 3",
    image: "march10-images/DSC_0098.JPG"
  },
  {
    year: "2019",
    title: "This is a test title 4",
    image: "march10-images/DSC_0101.JPG"
  },
  {
    year: "2019",
    title: "This is a test title 2",
    image: "march10-images/DSC_0100.JPG"
  },
  {
    year: "2020",
    title: "This is a test title 3",
    image: "march10-images/DSC_0092.JPG"
  }
];

if (document.getElementById("timeline")) {
  let timeline = new Timeline("timeline", DATA);
  timeline.init();
}
