import AbstractShareButton from "./AbstractShareButton"
import EventHandler from "./EventHandler"

export default class ShareButtonTwitter extends AbstractShareButton {

  eventHandler: EventHandler
  url: string

  constructor(elClassName: string, url: string) {
    super(elClassName, url)
  }

  createLink(): string {
    return `https://twitter.com/share?url=${this.url}`
  }

}
