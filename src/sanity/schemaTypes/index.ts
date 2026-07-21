import { type SchemaTypeDefinition } from 'sanity'
import { jobType } from './jobType'
import {blockContentType} from './blockContentType'
import {postType} from './postType'
// Removed authorType and categoryType imports

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [blockContentType, postType,jobType], // Removed them from this array too
}
