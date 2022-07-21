import React from 'react'
import './Accordion.scss'


const paragraph = "POLAND, BOLESŁAWIEC 59-700"
const phone_num_1 = "marketing@safereum.eu"
const phone_num_2 = "office@safereum.eu"


const data = [
  {
    title: 'CONTACTS',
    paragraph,
    phone_num_1,
    phone_num_2,
  },
]

export default class Accordion extends React.Component {
  render() {
    return (
      <div {...{ className: 'wrapper' }}>
        <ul {...{ className: 'accordion-list' }}>
          {data.map((data, key) => {
            return (
              <li {...{ className: 'accordion-list__item', key }}>
                <AccordionItem {...data} />
              </li>
            )
          })}
        </ul>
      </div>
    )
  }
}

class AccordionItem extends React.Component {
  state = {
    opened: false
  }

  render() {
    const {
      props: {
        title,
        paragraph,
        phone_num_1,
        phone_num_2,

      },
      state: {
        opened
      }
    } = this

    return (
      <div
        {...{
          className: `accordion-item, ${(opened && 'accordion-item--opened') || (window.innerWidth >= 768 && 'accordion-item--opened')}`,
          onClick: () => { this.setState({ opened: !opened }) }
        }}
      >
        <div {...{ className: 'accordion-item__line' }}>
          <h3 {...{ className: 'accordion-item__title' }}>
            {title}
          </h3>
          <span {...{ className: 'accordion-item__icon' }} />
        </div>
        <div {...{ className: 'accordion-item__inner' }}>
          <div {...{ className: 'accordion-item__content' }}>
            <p {...{ className: 'accordion-item__paragraph' }}>
              {paragraph}
            </p>
            <p {...{ className: 'accordion-item__phone_num' }}>
              {phone_num_1}
            </p>
            <p {...{ className: 'accordion-item__phone_num' }}>
              {phone_num_2}
            </p>
          </div>
        </div>
      </div>
    )
  }
}
