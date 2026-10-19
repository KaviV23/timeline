export interface PostProps {
  img: {
    src: string,
    alt: string,
  },
  post: {
    title: string,
    description: string,
    dateTime: Date,
    link: string,
  },
}