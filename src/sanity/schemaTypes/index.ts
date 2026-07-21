import { type SchemaTypeDefinition } from 'sanity'

import {blockContentType} from './blockContentType'
import {postType} from './postType'
// Removed authorType and categoryType imports

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [blockContentType, postType], // Removed them from this array too
}
