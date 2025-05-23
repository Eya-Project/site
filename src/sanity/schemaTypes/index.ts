import { type SchemaTypeDefinition } from "sanity";

import { blockContentType } from "./blockContentType";
import { navType } from "./navType";
import { homeType } from "./homeType";
import { countryType } from "./countryType";
import { imamType } from "./imamType";
import { eventType } from "./eventType";
import { faqType } from "./faqType";
import { pageType } from "./pageType";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [blockContentType, navType, homeType, countryType, imamType, eventType, faqType, pageType],
};
