export interface User {
    name: { first: string; last: string };
    email: string;
    gender: string;
    // Diğer alanlar, örneğin:
    location: { city: string; country: string };
    picture: { large: string; medium: string; thumbnail: string };
  }