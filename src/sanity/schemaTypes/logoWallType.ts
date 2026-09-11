import { defineArrayMember, defineField, defineType } from 'sanity'

export const logoWallType = defineType({
  name: 'logoWall',
  title: 'Trusted Logos',
  type: 'document',

  fields: [
    defineField({
      name: 'title',
      title: 'Internal Title',
      type: 'string',
      initialValue: 'Trusted Logos',
      readOnly: true,
    }),
    defineField({
      name: 'logos',
      title: 'Client Logos',
      description:
        'Drag & drop multiple logo files at once to add them all in one go. Drag items to reorder — order here controls the display order on the homepage.',
      type: 'array',
      of: [
        defineArrayMember({
          name: 'logo',
          title: 'Logo',
          type: 'image',
          options: {
            hotspot: true,
          },
          fields: [
            defineField({
              name: 'name',
              title: 'Client / Brand Name',
              type: 'string',
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: 'alt',
              title: 'Alternative text',
              type: 'string',
            }),
            defineField({
              name: 'segment',
              title: 'Client Segment',
              description:
                'Used by the filters in the flagship customer section.',
              type: 'string',
              options: {
                list: [
                  'Lifestyle Brands',
                  'Supermarkets',
                  'Wholesale & Distribution',
                  'MBO',
                ],
              },
            }),
            defineField({
              name: 'industry',
              title: 'Industry / Client Type',
              type: 'string',
            }),
            defineField({
              name: 'tags',
              title: 'Products / Capabilities',
              description:
                'Add short labels such as ERP, GST, Retail, or eCom OMS.',
              type: 'array',
              of: [defineArrayMember({ type: 'string' })],
            }),
          ],
          preview: {
            select: {
              title: 'name',
              media: 'asset',
            },
          },
        }),
      ],
      options: {
        layout: 'grid',
      },
    }),
  ],
  preview: {
    select: {
      title: 'title',
      logos: 'logos',
    },
    prepare({ title, logos }) {
      const count = Array.isArray(logos) ? logos.length : 0
      return {
        title: title || 'Trusted Logos',
        subtitle: `${count} logo${count === 1 ? '' : 's'}`,
      }
    },
  },
})
