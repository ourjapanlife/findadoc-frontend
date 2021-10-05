import {
  cityRules,
  wardRules,
  nameRules,
  websiteRules,
} from "./add-clinic-rules";

describe("cityRules", () => {
  describe("required", () => {
    describe("when it has value", () => {
      it("returns true", () => {
        const [hasValue] = cityRules;
        expect(hasValue("Tokyo")).toBeTruthy();
      });
    });

    describe("when has no value", () => {
      it("returns 'City is required'", () => {
        const [hasValue] = cityRules;
        expect(hasValue("")).toEqual("City is required");
      });
    });
  });

  describe("minimum characters", () => {
    describe("when it has value", () => {
      it("returns true", () => {
        const [, hasAtLeastTwoChars] = cityRules;
        expect(hasAtLeastTwoChars("Tokyo")).toBeTruthy();
      });
    });

    describe("when has no value", () => {
      it("returns 'City must be at least 2 characters'", () => {
        const [, hasAtLeastTwoChars] = cityRules;
        expect(hasAtLeastTwoChars("")).toEqual(
          "City name must be at least 2 characters"
        );
      });
    });
  });
});

describe("wardRules", () => {
  describe("required", () => {
    describe("when it has value", () => {
      it("returns true", () => {
        const [hasValue] = wardRules;
        expect(hasValue("Shibuya")).toBeTruthy();
      });
    });

    describe("when has no value", () => {
      it("returns 'Ward is required'", () => {
        const [hasValue] = wardRules;
        expect(hasValue("")).toEqual("Ward is required");
      });
    });
  });

  describe("minimum characters", () => {
    describe("when it has value", () => {
      it("returns true", () => {
        const [, hasAtLeastTwoChars] = wardRules;
        expect(hasAtLeastTwoChars("Shibuya")).toBeTruthy();
      });
    });

    describe("when has no value", () => {
      it("returns 'Ward name must be at least 2 characters'", () => {
        const [, hasAtLeastTwoChars] = wardRules;
        expect(hasAtLeastTwoChars("")).toEqual(
          "Ward name must be at least 2 characters"
        );
      });
    });
  });
});

describe("nameRules", () => {
  describe("required", () => {
    describe("when it has value", () => {
      it("returns true", () => {
        const [hasValue] = nameRules;
        expect(hasValue("Shibuya")).toBeTruthy();
      });
    });

    describe("when has no value", () => {
      it("returns 'Clinic is required'", () => {
        const [hasValue] = nameRules;
        expect(hasValue("")).toEqual("Clinic name is required");
      });
    });
  });

  describe("minimum characters", () => {
    describe("when it has value", () => {
      it("returns true", () => {
        const [, hasAtLeastTwoChars] = nameRules;
        expect(hasAtLeastTwoChars("Shibuya")).toBeTruthy();
      });
    });

    describe("when has no value", () => {
      it("returns 'Clinic name must be at least 2 characters'", () => {
        const [, hasAtLeastTwoChars] = nameRules;
        expect(hasAtLeastTwoChars("")).toEqual(
          "Clinic name must be at least 2 characters"
        );
      });
    });
  });
});

describe("websiteRules", () => {
  describe("required", () => {
    describe("when it has value", () => {
      it("returns true", () => {
        const [hasValue] = websiteRules;
        expect(hasValue("Shibuya")).toBeTruthy();
      });
    });

    describe("when has no value", () => {
      it("returns 'Website URL is required'", () => {
        const [hasValue] = websiteRules;
        expect(hasValue("")).toEqual("Website URL is required");
      });
    });
  });

  describe("minimum characters", () => {
    describe("when it has value", () => {
      it("returns true", () => {
        const [, hasAtLeastFiveChars] = websiteRules;
        expect(hasAtLeastFiveChars("https://www.findadoc.jp")).toBeTruthy();
      });
    });

    describe("when has no value", () => {
      it("returns 'Please enter a valid URL'", () => {
        const [, hasAtLeastFiveChars] = websiteRules;
        expect(hasAtLeastFiveChars("")).toEqual("Please enter a valid URL");
      });
    });
  });
});
