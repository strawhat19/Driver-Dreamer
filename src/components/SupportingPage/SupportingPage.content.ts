export type SupportingPageKey = `about` | `terms` | `contact` | `privacy` | `journal`;

type PageSection = {
  title: string;
  body: string;
  link?: {
    href: string;
    label: string;
  };
};

type PageContent = {
  title: string;
  eyebrow: string;
  introduction: string;
  sections: PageSection[];
};

export const supportingPages: Record<SupportingPageKey, PageContent> = {
  about: {
    eyebrow: `ABOUT DRIVER DREAMER`,
    title: `For the love of the drive.`,
    introduction: `A place to discover remarkable cars, explore the details, and collect the ones you keep coming back to.`,
    sections: [
      {
        title: `Built around your next obsession.`,
        body: `Driver Dreamer brings beautiful cars and considered collections together in one quiet space. Save a favorite to your garage and make room for the next great find.`,
      },
      {
        title: `Made by Piratechs.`,
        body: `We build thoughtful digital experiences for people who care about the details.`,
        link: { href: `https://piratechs.com/`, label: `Meet Piratechs ↗` },
      },
    ],
  },
  terms: {
    eyebrow: `TERMS OF USE`,
    title: `A little clarity for the road ahead.`,
    introduction: `Driver Dreamer is a demonstration for discovering cars and keeping a personal collection of favorites.`,
    sections: [
      {
        title: `Using this experience.`,
        body: `Car details are sample content for inspiration. This app does not offer vehicles for sale, accept payments, or provide a vehicle purchase agreement. Verify vehicle details with a seller before making a purchase.`,
      },
      {
        title: `Your saved garage.`,
        body: `Favorites are stored on your device. Clearing browser or app storage removes them, and they are not synchronized with an account.`,
      },
      {
        title: `Questions about these terms.`,
        body: `Visit Piratechs to connect with the team behind Driver Dreamer.`,
        link: { href: `https://piratechs.com/`, label: `Visit Piratechs ↗` },
      },
    ],
  },
  contact: {
    eyebrow: `CONTACT`,
    title: `Let’s talk cars.`,
    introduction: `Have a question, a suggestion, or an idea for a collection? We would love to hear it.`,
    sections: [
      {
        title: `Connect with Piratechs.`,
        body: `Head to Piratechs to find the team behind Driver Dreamer and start a conversation.`,
        link: { href: `https://piratechs.com/`, label: `Visit Piratechs ↗` },
      },
    ],
  },
  privacy: {
    eyebrow: `PRIVACY POLICY`,
    title: `Your garage stays with you.`,
    introduction: `This demonstration keeps saved car IDs in your browser or device storage. No account is required.`,
    sections: [
      {
        title: `What is stored.`,
        body: `Saving or removing a car updates a list of car IDs in local storage on web or device storage on mobile. The demonstration does not request your name, email address, or payment information.`,
      },
      {
        title: `How to remove your saved data.`,
        body: `Remove individual favorites in your garage, or clear this app’s browser or device storage to remove the entire saved collection.`,
      },
      {
        title: `External websites.`,
        body: `Links to Piratechs open a separate website with its own privacy practices.`,
        link: { href: `https://piratechs.com/`, label: `Visit Piratechs ↗` },
      },
    ],
  },
  journal: {
    eyebrow: `THE JOURNAL`,
    title: `Stories worth taking the long way for.`,
    introduction: `A space for the design, details, and feeling behind the cars we love.`,
    sections: [
      {
        title: `The first chapter is being written.`,
        body: `While our journal takes shape, explore the collection and save the cars that spark something. Every dream garage starts with one great find.`,
      },
    ],
  },
};
