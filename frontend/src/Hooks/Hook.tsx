//variables
const professionalUse = {
  title: "For Professional Use Products",
  categories: [
    "Digital Camera",
    "Laptop",
    "Smartphone",
    "Flash Drive",
    "Headset",
    "Drones",
    "Bluetooth Devices",
    "CCTV",
    "Camera",
  ],
  links: [
    "/gadgets/categories/digital-camera",
    "/gadgets/categories/laptop",
    "/gadgets/categories/smartphone",
    "/gadgets/categories/flash-drive",
    "/gadgets/categories/headset",
    "/gadgets/categories/drones",
    "/gadgets/categories/bluetooth-devices",
    "/gadgets/categories/cctv",
    "/gadgets/categories/camera",
  ],
};
const entertainment = {
  title: "For Entertainment Products",
  categories: [
    "Laptop",
    "Smartphone",
    "Headset",
    "Bluetooth Devices",
    "Digital Camera",
  ],
  links: [
    "/gadgets/categories/laptop",
    "/gadgets/categories/smartphone",
    "/gadgets/categories/headset",
    "/gadgets/categories/bluetooth-devices",
    "/gadgets/categories/digital-camera",
  ],
};
const gaming = {
  title: "For Gaming Products",
  categories: [
    "Laptop",
    "Smartphone",
    "Headset",
    "Gaming Consoles",
    "Gaming Consoles Accessories",
  ],
  links: [
    "/gadgets/categories/laptop",
    "/gadgets/categories/smartphone",
    "/gadgets/categories/headset",
    "/gadgets/categories/gaming-console",
    "/gadgets/categories/gaming-console-accesory",
  ],
};
const others = {
  title: "Other Products",
  categories: ["Smart Watches", "Spy Gadgets"],
  links: [
    "/gadgets/categories/smart-watches",
    "/gadgets/categories/spy-gadgets",
  ],
};

// for dynamic setting of width in the gallery slider using onclick
export const slider = (index: number) => {
  var elements = Array.from(
    document.getElementsByClassName("imgsrc") as HTMLCollectionOf<HTMLElement>
  );
  for (let i = 0; i < elements.length; i++) {
    if (index === i) {
      elements[i].style.width = "100%";
    } else {
      elements[i].style.width = "0";
    }
  }
};

export const gadgetsHiddenDivHook = (id: string) => {
  if (id === "professionalUse") {
    return professionalUse;
  } else if (id === "entertainment") {
    return entertainment;
  } else if (id === "gaming") {
    return gaming;
  } else if (id === "others") {
    return others;
  } else {
    console.log("Error Occured: ID Not Found");
  }
};
