import type {StructureResolver} from 'sanity/structure'

export const structure: StructureResolver = (S) =>
  S.list()
    .title('Content Management')
    .items([
      // Explicitly add and rename the Blog Posts
      S.documentTypeListItem('post').title('Blog Posts'),
      
      // Explicitly add and rename the Job Postings
      S.documentTypeListItem('job').title('Job Postings'),
      
      // (Optional) If you add more document types later that aren't listed above, 
      // this line catches them and adds them to the bottom automatically:
      ...S.documentTypeListItems().filter(
        (listItem) => !['post', 'job'].includes(listItem.getId()!)
      ),
    ])

    