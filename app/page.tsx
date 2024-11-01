'use client'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Connection, PublicKey, clusterApiUrl } from '@solana/web3.js'

const network = clusterApiUrl('devnet')
const connection = new Connection(network, 'confirmed')
const walletAddress = new PublicKey(
  '4bNpxEyw5j68dsVVtCLtZmabtYshAszyo26RKBL6JvP1'
)

const trackTransactions = async () => {
  console.log(
    `Tracking transactions for ${walletAddress.toBase58()} on ${network}`
  )

  const latestBlockhash = await connection.getLatestBlockhash('confirmed')
  let currentBlock = latestBlockhash.blockhash

  // Polling interval for new transactions (e.g., every 10 seconds)
  setInterval(async () => {
    try {
      const transactions = await connection.getConfirmedSignaturesForAddress2(
        walletAddress,
        { until: currentBlock }
      )
      for (const transaction of transactions) {
        console.log('New Transaction:', transaction.signature)

        // Fetch and display details of the transaction
        const transactionDetails = await connection.getConfirmedTransaction(
          transaction.signature
        )
        console.log('Transaction Details:', transactionDetails)
      }
      if (transactions.length) {
        currentBlock = transactions[0].signature // Update the latest blockhash for tracking
      }
    } catch (error) {
      console.error('Error tracking transactions:', error)
    }
  }, 10000) // Adjust interval time as needed
}

export default function Home() {
  return (
    <main className='p-10'>
      <Input className='w-96 my-4' placeholder='Enter your SOL address' />
      <Button onClick={trackTransactions}>Click Me!</Button>
    </main>
  )
}
