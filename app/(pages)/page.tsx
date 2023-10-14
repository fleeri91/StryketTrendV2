'use client'

/** Library */
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'

/** Tremor */
import { Button, Card, Flex, Table, TableBody, TableCell, TableHead, TableHeaderCell, TableRow } from '@tremor/react'

/** Store */
import { useGetStryktipsetQuery } from '@store/api/stryktipset.api'
import { addDraw } from '@store/slices/stryktipset.slice'

/** Type */
import { Event } from 'types/stryktipset'
import { persistor } from '@store/index'

const App = () => {
  const dispatch = useDispatch()

  const { data: StryktipsetData } = useGetStryktipsetQuery(undefined, { pollingInterval: 36000 })

  const renderEvent = (event: Event, index: number) => (
    <TableRow key={event.eventNumber} onClick={() => console.log(`Clicked event ${event.eventNumber}`)}>
      <TableCell>{`${event.participants[0].name} - ${event.participants[1].name}`}</TableCell>
      <TableCell className="flex flex-col">
        {`${event.distribution.home}%`}
        <br />
        {`${event.odds.home}`}
      </TableCell>
      <TableCell>
        {`${event.distribution.draw}%`}
        <br />
        {`${event.odds.draw}`}
      </TableCell>
      <TableCell>
        {`${event.distribution.away}%`}
        <br />
        {`${event.odds.away}`}
      </TableCell>
    </TableRow>
  )

  const addData = () => {
    if (!StryktipsetData) return

    dispatch(addDraw(StryktipsetData))
  }

  return (
    <div className="mx-auto max-w-screen-lg">
      <Card className="my-4">
        <Table className="mt-5">
          <TableBody>{StryktipsetData?.events.map(renderEvent)}</TableBody>
        </Table>
      </Card>
      <Card className="my-4">
        <Flex>
          <Button
            onClick={() => {
              persistor.purge()
            }}
          >
            Clear
          </Button>
          <Button onClick={addData}>Add</Button>
        </Flex>
      </Card>
    </div>
  )
}
export default App
