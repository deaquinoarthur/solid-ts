import AbstractShareButton from "./AbstractShareButton"
import EventHandler from "./EventHandler"

export default class ShareButtonLinkedin extends AbstractShareButton {

  eventHandler: EventHandler
  url: string

  constructor(elClassName: string, url: string) {
    super(elClassName, url)
  }

  createLink(): string {
    return `http://www.linkedin.com/shareArticle?url=${this.url}`
  }

}
