export default {
  name: 'brand',
  title: 'Brand',
  type: 'document',
  fields: [
    {
      name: 'brandName',
      title: 'Brand Name',
      type: 'string'
    },
    {
      name: 'brandImage',
      title: 'Brand Image',
      type: 'figure',
      options: {
        hotspot: true
      }
    }
  ],
  preview: {
    select: {
      title: 'brandName',
      media: 'brandImage'
    }
  }
}
