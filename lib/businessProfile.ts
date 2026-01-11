export type BusinessProfile = {
  business: {
    name: string;
    description: string;
    industry: string;
    serviceArea: string;
    contactEmail: string;
  };

  services: {
    id: string;
    name: string;
    description: string;
    pricingStyle: "fixed" | "range" | "custom" | "contact";
  }[];

  quoteBehavior: {
    quoteType: "instant" | "estimate" | "request";
    requiredCustomerFields: {
      name: boolean;
      phone: boolean;
      email: boolean;
      address: boolean;
    };
    extraQuestions: string[];
  };

  experience: {
    tone: "friendly" | "professional" | "simple";
    detailLevel: "short" | "standard" | "deep";
    mobilePriority: boolean;
  };
};

export const defaultBusinessProfile: BusinessProfile = {
  business: {
    name: "",
    description: "",
    industry: "",
    serviceArea: "",
    contactEmail: "",
  },

  services: [],

  quoteBehavior: {
    quoteType: "estimate",
    requiredCustomerFields: {
      name: true,
      phone: true,
      email: false,
      address: false,
    },
    extraQuestions: [],
  },

  experience: {
    tone: "friendly",
    detailLevel: "standard",
    mobilePriority: true,
  },
};
