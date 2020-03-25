export const data = {
  custA: { JAN: [150, 250, 20], FEB: [320, 240], MAR: [450, 100, 760] },
  custB: { JAN: [250, 80], FEB: [220, 140], MAR: [250, 100, 560, 111] },
  custC: { JAN: [450, 580, 90], FEB: [320, 240, 345], MAR: [250, 300, 760] }
};

export const calRewardPoint = num => {
  if (num > 100) {
    return 2 * (num - 100) + 50;
  } else if (num > 50) {
    return num - 50;
  } else {
    return 0;
  }
};
