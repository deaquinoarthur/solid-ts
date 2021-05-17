export default class EventHandler {

  addEventListenerToClass(elClassName: string, event: string, fn: any) {
    const elements: any = document.querySelectorAll(elClassName)

    for (const element of elements) 
      element.addEventListener(event, fn)
  }

}
