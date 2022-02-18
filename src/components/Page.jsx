import React from 'react'
import Pagination from 'react-bootstrap/Pagination'
function Page({ itemsPpg, onPageChange, totNOfPages }) {
    const [counter, setCounter] = React.useState(1);
    React.useEffect(() => {
        const value = itemsPpg * counter
        onPageChange(value - itemsPpg, value)
    }, [counter])
    const prevBtn = () => {
        if (counter === 1) {
            setCounter(1);
        }
        else {
            setCounter(counter - 1)
        }
    }
    const nextBtn = () => {
        if (counter === totNOfPages) {
            setCounter(totNOfPages)
        }
        else {
            setCounter(counter + 1)
        }
    }
    return (
        <>

            <Pagination size='md' style={{
                justifyContent: 'center'
            }}>
                <Pagination.Prev onClick={prevBtn} />
                {
                    new Array(totNOfPages).fill("").map((item, index) => {
                        return (
                            <Pagination.Item active={index + 1 === counter} onClick={() => setCounter(index + 1)}>
                                {
                                    index + 1
                                }
                            </Pagination.Item>
                        )
                    })
                }

                <Pagination.Next onClick={nextBtn} />
            </Pagination>
        </>
    )
}

export default Page