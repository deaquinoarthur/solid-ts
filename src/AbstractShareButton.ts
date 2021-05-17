import EventHandler from "./EventHandler"

export default abstract class AbstractShareButton {

  elClassName: string
  eventHandler: EventHandler
  url: string

  constructor(elClassName: string, url: string) {
    this.elClassName = elClassName
    this.url = url
    this.eventHandler = new EventHandler()
  }

  abstract createLink(): string

  bind(elClassName: string, socialNetwork: string) {
    const link = this.createLink()

    this.eventHandler.addEventListenerToClass(
      this.elClassName,
      'click',
      () => console.log(link)
    )
  }

}
