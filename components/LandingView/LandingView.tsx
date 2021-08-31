import {FC} from "react";
import {Card} from "@components/ui/Card/Card";
import {Button} from "@components/ui/Button/Button";
import s from "./LandingView.module.scss";
import cn from "classnames";

interface Post {
  title
  content
  endsDate
  endedDate
  status
}

interface Vote {
  totalVotes: string
  identifier: string
  creator: string
  forVotes: string
  againstVotes: string
  voters: Voter[]
}

interface Voter {
  id: string
  decision: string
  voteWeight: number
}

const postData: Post = {
  title: "DeFi Education Fund",
  endsDate: "Voting Ends 29 June 2021, 20:11 BST",
  endedDate: "Voting Ended 29 June 2021, 20:11 BST",
  content: "Eden is a decentralized autonomous organization (DAO) which means that we are owned and operated by our community. We use a democratic and transparent voting system which allows all stakeholder in Eden DOA to express and shape the building of Eden. Eden is a decentralized autonomous organization (DAO) which means that we are owned and operated by our community. We use a democratic and transparent voting system which allows all stakeholder in Eden DOA to express and shape the building of Eden.",
  status: "Defeated"
}

const votesData: Vote = {
  totalVotes: '11,450,976',
  identifier: 'QmRRWupF',
  creator: '0x42...9185',
  forVotes: '79,693,053',
  againstVotes: '79,693,053',
  voters: [
    {
      id: '0xA3...67B9',
      decision: 'Support',
      voteWeight: Math.random() * 1000
    },
    {
      id: '0xA3...67B9',
      decision: 'Support',
      voteWeight: Math.random() * 1000
    },
    {
      id: '0xA3...67B9',
      decision: 'Support',
      voteWeight: Math.random() * 1000
    },
    {
      id: '0xA3...67B9',
      decision: 'Support',
      voteWeight: Math.random() * 1000
    },
    {
      id: '0xA3...67B9',
      decision: 'Support',
      voteWeight: Math.random() * 1000
    }
  ]
}

export const LandingView: FC = () => {
  return (
    <div className={s.root}>
      <Button color='transparent' className={s.backButton}>
        <img src="arrow-Left.svg" alt="" height={24}/>
      </Button>
      <PostView post={postData}/>
      <Votes vote={votesData}/>
    </div>
  )
}

const PostView: FC<{ post: Post }> = ({post}) => {
  return (
    <Card className='flex flex-col lg:max-w-md'>
      <header>
        <h2 className='text-2xl font-bold mb-5 lg:text-3xl lg:mb-7'>{post.title}</h2>
        <p className='text-xs lg:text-sm'>{post.endsDate}</p>
      </header>
      <div className='flex-1'>
        <Card className={s.contentCard}>
          <p className={s.contentCardContent}>{post.content}</p>
          <div className={s.seeMoreButton}>
            <Button slim variant='clear'>
              <span>See more</span>
              <svg width="8" height="5" viewBox="0 0 8 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" clipRule="evenodd"
                      d="M1.61966 0.0350952L4.41581 2.86852L7.21196 0.0350952L7.91725 0.74363L4.41581 4.29061L0.914368 0.74363L1.61966 0.0350952Z"
                      fill="#508FF4"/>
              </svg>
            </Button>
          </div>
        </Card>
      </div>
      <div className='text-xs text-accents-7 font-light my-4 lg:my-5'>{post.endedDate}</div>
      <Button
        color='warning'
        className='font-semibold lg: mb-2'>{post.status}</Button>
    </Card>
  )
}

const Votes: FC<{ vote: Vote }> = ({vote}) => {
  return (
    <Card size='spacious' className='lg:flex-1'>
      <div className='flex justify-between items-center'>
        <div className="totalVotes">
          <p className='text-sm lg:text-lg'>TOTAL VOTES</p>
          <p className='text-2xl font-bold mt-2 lg:text-3xl lg:mt-4'>{vote.totalVotes}</p>
        </div>
        <div className="creator text-xs text-right lg:text-sm">
          <div>
            <p><strong>Identifier:</strong> {vote.identifier}</p>
          </div>
          <div>
            <p><strong>Creator:</strong> {vote.creator}</p>
          </div>
        </div>
      </div>
      <div className="flex flex-col mt-5 space-y-4 lg:flex-row lg:space-y-0 lg:space-x-6">
        <Card size='compact' className='flex-1'>
          <div className={s.barHeader}>
            <span className='mr-4'>FOR</span>
            <span>{vote.forVotes}</span>
          </div>
          <div className={cn(s.bar, "bg-green")}/>
        </Card>
        <Card size='compact' className='flex-1'>
          <div className={s.barHeader}>
            <span className='mr-4'>AGAINST</span>
            <span>{vote.againstVotes}</span>
          </div>
          <div className={cn(s.bar, "bg-red")}/>
        </Card>
      </div>
      <VotersTable voters={vote.voters}/>
    </Card>
  )
}

const VotersTable: FC<{ voters: Voter[] }> = ({voters}) => {
  return (
    <div className='flex flex-col justify-center'>
      <div className='flex justify-between mt-7 overflow-x-auto'>
        <div className='flex flex-col flex-1'>
          <span className={s.voteTableHeader}>Voter</span>
          {
            voters.map((voter, i) =>
              (<div className={s.cell} key={i + 'id'}>
                <span>{voter.id}</span>
              </div>))
          }
        </div>
        <div className='flex flex-col flex-1 text-center'>
          <span className={s.voteTableHeader}>Decision</span>

          {
            voters.map((voter, i) =>
              (<div className={s.cell} key={i + 'decision'}>
                <span>{voter.decision}</span>
              </div>))
          }
        </div>
        <div className='flex flex-col flex-1 text-right lg:text-center'>
          <span className={s.voteTableHeader}>Vote Weight</span>
          {
            voters.map((voter, i) =>
              (<div className={s.cell} key={i + 'voteWeight'}>
                <span>{voter.voteWeight.toFixed(6)}</span>
              </div>))
          }
        </div>
      </div>
      <div className={cn(s.seeMoreButton, 'mx-auto mt-6 lg:mr-0')}>
        <Button slim variant='clear'>
          <span>See more</span>
          <svg width="8" height="5" viewBox="0 0 8 5" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd"
                  d="M1.61966 0.0350952L4.41581 2.86852L7.21196 0.0350952L7.91725 0.74363L4.41581 4.29061L0.914368 0.74363L1.61966 0.0350952Z"
                  fill="#508FF4"/>
          </svg>
        </Button>
      </div>
    </div>
  )
}
