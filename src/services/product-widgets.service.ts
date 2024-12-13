import axios from 'axios'
import type { WidgetModel } from '@/utils/widget-types'

export async function getProductWidgetData(): Promise<WidgetModel[]> {
  const { data } = await axios.get<WidgetModel[]>(
    'https://b795b019-1f84-41f4-93a3-a702d686c75a.mock.pstmn.io/product-widgets',
  )

  return data

  // const { data } = await new Promise<{ data: WidgetModel[] }>((resolve) => {
  //   setTimeout(() => {
  //     resolve({
  //       data: [
  //         {
  //           id: 1,
  //           type: 'carbon',
  //           amount: 2,
  //           action: 'offsets',
  //           active: false,
  //           linked: false,
  //           selectedColor: 'green',
  //         },
  //         {
  //           id: 2,
  //           type: 'trees',
  //           amount: 15,
  //           action: 'plants',
  //           active: false,
  //           linked: true,
  //           selectedColor: 'black',
  //         },
  //         {
  //           id: 3,
  //           type: 'plastic',
  //           amount: 300,
  //           action: 'collects',
  //           active: true,
  //           linked: true,
  //           selectedColor: 'beige',
  //         },
  //       ] as WidgetModel[],
  //     })
  //   }, 1000)
  // })
  //
  // return data
}
