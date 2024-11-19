interface IGame {
  id: number;
  name: string;
  prodYear: string;
  imageName: string;
  youTubeId: string;
}

interface ICredit {
  name: string;
  url: string;
  description: string;
  description_bold: string;
}

export {IGame, ICredit}
