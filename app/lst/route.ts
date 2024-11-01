import console from 'console'
import { NextRequest, NextResponse } from 'next/server'

// const data = {
//   //   accountData: [
//   //     {
//   //       account: '8sd6ThQ9fG8ypeNLhL6wzxNiPwdJ7ptyguzXiTmsHPAV',
//   //       nativeBalanceChange: -10065000,
//   //       tokenBalanceChanges: []
//   //     },
//   //     {
//   //       account: '4bNpxEyw5j68dsVVtCLtZmabtYshAszyo26RKBL6JvP1',
//   //       nativeBalanceChange: 10000000,
//   //       tokenBalanceChanges: []
//   //     },
//   //     {
//   //       account: 'ComputeBudget111111111111111111111111111111',
//   //       nativeBalanceChange: 0,
//   //       tokenBalanceChanges: []
//   //     },
//   //     {
//   //       account: '11111111111111111111111111111111',
//   //       nativeBalanceChange: 0,
//   //       tokenBalanceChanges: []
//   //     }
//   //   ],
//   description:
//     '8sd6ThQ9fG8ypeNLhL6wzxNiPwdJ7ptyguzXiTmsHPAV transferred 0.01 SOL to 4bNpxEyw5j68dsVVtCLtZmabtYshAszyo26RKBL6JvP1.',
//   //   events: [],
//   //   fee: 65000,
//   //   feePayer: '8sd6ThQ9fG8ypeNLhL6wzxNiPwdJ7ptyguzXiTmsHPAV',
//   //   instructions: [
//   //     {
//   //       accounts: [],
//   //       data: '3s2DQSEX3t4P',
//   //       innerInstructions: [],
//   //       programId: 'ComputeBudget111111111111111111111111111111'
//   //     },
//   //     {
//   //       accounts: [
//   //         '8sd6ThQ9fG8ypeNLhL6wzxNiPwdJ7ptyguzXiTmsHPAV',
//   //         '4bNpxEyw5j68dsVVtCLtZmabtYshAszyo26RKBL6JvP1'
//   //       ],
//   //       data: '3Bxs4NN8M2Yn4TLb',
//   //       innerInstructions: [],
//   //       programId: '11111111111111111111111111111111'
//   //     }
//   //   ],
//   nativeTransfers: [
//     {
//       amount: 10000000,
//       fromUserAccount: '8sd6ThQ9fG8ypeNLhL6wzxNiPwdJ7ptyguzXiTmsHPAV',
//       toUserAccount: '4bNpxEyw5j68dsVVtCLtZmabtYshAszyo26RKBL6JvP1'
//     }
//   ],
//   signature:
//     'SL49wRYdExKmzhfXYCZ1ABUm2C1eLiQXxeQ2wa7Lgs4xK34QqxznKDHSDfhuCRx6QvW4yEuLYQkti4anFTdLg1E',
//   slot: 337042005,
//   source: 'SYSTEM_PROGRAM',
//   timestamp: 1730476711,
//   tokenTransfers: [],
//   transactionError: null,
//   type: 'TRANSFER'
// }

export async function POST(res: NextRequest) {
  console.log('POST request received')
  const data: any = await res.json()
  console.log(data.description)
  console.log(data.nativeTransfers[0].fromUserAccount)
  console.log(data.nativeTransfers[0].toUserAccount)
  console.log(data.nativeTransfers[0].amount)

  return NextResponse.json(data)
}
