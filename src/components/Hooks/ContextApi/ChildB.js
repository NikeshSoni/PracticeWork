import React from 'react';
import { store , storeLast} from './Index';

const ChildB = () => {
  return (

    <div className='d-flex gap-3'>
        <store.Consumer>
              {
                (name) => {
                    return(
                        <>
                            <h1>Hello i am {name}</h1>
                        </>
                    )
                }
              }
        </store.Consumer>
        <storeLast.Consumer>
                    {
                      (lastName) => {
                          return(
                              <>
                                  <h1> {lastName}</h1>
                              </>
                          )
                      }
                    }
              </storeLast.Consumer>
    </div>
  )
}

export default ChildB