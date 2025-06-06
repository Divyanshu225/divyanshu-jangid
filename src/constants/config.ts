type TSection = {
  p: string;
  h2: string;
  content?: string;
};

type TConfig = {
  html: {
    title: string;
    fullName: string;
    email: string;
  };
  hero: {
    name: string;
    p: string[];
  };
  contact: {
    p: string;
    h2: string;
    form: {
      name: {
        span: string;
        placeholder: string;
      };
      email: {
        span: string;
        placeholder: string;
      };
      message: {
        span: string;
        placeholder: string;
      };
    };
    receiverEmail: string;
  };
  sections: {
    about: Required<TSection>;
    experience: TSection;
    feedbacks: TSection;
    works: Required<TSection>;
  };
};

export const config: TConfig = {
  html: {
    title: "Divyanshu Jangid",
    fullName: "Divyanshu Jangid",
    email: "divyanshujangid781@gmail.com",
  },

  hero: {
    name: "Divyanshu Jangid",
    p: ["I develop 3D visuals,", "interfaces and web applications"],
  },

  contact: {
    p: "Get in touch",
    h2: "Contact.",
    form: {
      name: { span: "Your Name", placeholder: "What's your name?" },
      email: { span: "Your Email", placeholder: "What's your email?" },
      message: { span: "Your Message", placeholder: "What do you want to say?" },
    },
    receiverEmail: "divyanshujangid781@gmail.com",
  },

  sections: {
    about: {
      p: "Introduction",
      h2: "Overview.",
      content: `As a versatile full-stack developer, I specialize in crafting seamless user experiences with React, Redux Toolkit, and TailwindCSS on the frontend.  
I build robust backend services using Node.js, Express, and manage data efficiently with MongoDB and MySQL.  
With a strong foundation in both frontend and backend technologies, I deliver scalable, maintainable, and performant web applications.  
I’m committed to continuous learning and collaborating closely to bring innovative ideas to life.`,
    },
    experience: {
      p: "What I have done so far",
      h2: "Work Experience.",
    },
    feedbacks: {
      p: "What others say",
      h2: "Testimonials.",
    },
    works: {
      p: "My work",
      h2: "Projects.",
      content: `Following projects showcases my skills and experience through
real-world examples of my work. Each project is briefly described with
links to code repositories and live demos in it. It reflects my
ability to solve complex problems, work with different technologies,
and manage projects effectively.`,
    },
  },
};
