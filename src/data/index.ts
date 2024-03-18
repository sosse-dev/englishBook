type TheaderData = {
  title: string;
  desc: string;
};

type TmainData = {
  title: string;
  desc: string;
  comment: {
    title: string;
    sendedBy1: string;
    sendedBy2: string;
  };
  infoContact: {
    title: string;
    desc: string;
  };
};

export const headerData: TheaderData = {
  title: "Book",
  desc: "providing many ways fun to learn grammar, pronounciation, speaking, writing, even vocabularies. we formed this web in order to reach people wider to learn english langguage at ease. Many expreienced teacher have been joining us and willing to help student from kids, teen up until old people who are still eager to learn english more..!",
};

export const mainData: TmainData = {
  title: "Effective learning with various methods",
  desc: "Experience a more effective and efficient English learning experience with video, audio, text and interactive excercises",
  comment: {
    title: "Our Subcribers!!",
    sendedBy1: "Anonymous",
    sendedBy2: "Anonymous",
  },
  infoContact: {
    title: "Got a question?",
    desc: "If you have ideas on how we can improve our services, please share them with us.",
  },
};

export const quote =
  "the thing is, its hard to learn english, be patient if you are willing to feel many things";

export const footer1: String[] = ["Our Company", "Our Branches", "About Us"];
export const footer2: String[] = [
  "Introduction",
  "Lesson 1",
  "Lesson 2",
  "Lesson for Interview",
  "Lesson for Working",
  "More Lesson",
];