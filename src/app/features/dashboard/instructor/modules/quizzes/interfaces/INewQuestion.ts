export interface INewQuestion {
  title: string;
  description: string;
  options: Options;
  answer: string;
  difficulty: string;
  type: string;
}

interface Options {
  A: string;
  B: string;
  C: string;
  D: string;
}
