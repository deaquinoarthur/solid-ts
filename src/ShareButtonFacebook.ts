import AbstractShareButton from "./AbstractShareButton"
import EventHandler from "./EventHandler"

export default class ShareButtonFacebook extends AbstractShareButton {

  eventHandler: EventHandler
  url: string

  constructor(elClassName: string, url: string) {
    super(elClassName, url)
  }

  createLink(): string {
    return `http://www.facebook.com/sharer.php?u=${this.url}`
  }

}
