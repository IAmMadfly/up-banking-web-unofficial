import React, { Component } from 'react'
import ArrowIcon from 'components/icons/ArrowIcon'

export default class extends Component {
    constructor(args) {
        super();
        console.log("Token entry arguments:", arguments);
        this.tokenInput = React.createRef();
        this.token = () => {args.token()};
        this.setToken = (val) => {args.setToken(val)};
    }

    checkToken() {
        console.log("Token is:", this.tokenInput.current.value);
    }

    render() {
        return (
            <div className="flex flex-col h-full pt-0 md:pb-0 text-left">
                <div className="mb-6 flex items-center">
                    <button onClick={() => prevPage()} className="text-primary flex items-center rotate-90"><ArrowIcon className="mr-2 h-5 w-3 text-primary" /></button>
                    <div className="ml-auto inline-grid gap-2 grid-flow-col mb-4">
                        <img alt="Progress coin" src="/coin.png" className="w-4 h-4" />
                        <img alt="Progress coin" src="/coin.png" className="w-4 h-4" />
                        <div className="bg-altWhite w-4 h-4 rounded-full">
                        </div>
                    </div>
                </div>
        
                <h1 className="leading-tight text-3xl mb-3">What's your<br />personal token?</h1>
                <input ref={this.tokenInput} onChange={(e) => this.setToken(e.target.value)} className="text-primary text-3xl bg-transparent placeholder-gray-700 focus:outline-none" placeholder="up:yeah:abcdef123" autoFocus />
                <br />
                <br />
        
                <div className="mt-auto">
                    <button className="disabled:bg-gray-700 disabled:cursor-not-allowed mb-2 sm:max-w-xxs w-full border border-transparent inline-flex flex items-center justify-center px-10 py-2 rounded bg-primary hover:bg-primary-light focus:outline-none focus:border-primary-dark focus:shadow-outline active:bg-primary-dark transition ease-in-out duration-150" onClick={() => this.checkToken()}>
                        <div className="text-center text-gray-900">Next</div>
                    </button>
                    <hr className="border-altWhite bg-altWhite my-4" />
                    <div className="grid gap-4 md:grid-flow-col">
                        <div>
                            <p className="text-sm text-primary"><a href="https://api.up.com.au/getting_started/" title="Get your Personal Access Token to play with!" target="_blank" rel="noreferrer">Don't have your personal token?</a></p>
                            <p className="mt-4 text-gray-600 text-sm max--xs">I <b>do not</b> store this token in any way. Everything is kept in React state and no network requests are made, other than those to the Up API.</p>
                        </div>
                        <div>
                            <p className="text-sm text-gray-500">Agreement</p>
                            <p className="mt-4 text-gray-600 text-sm max--xs">That being said, enter at your own risk. By entering, you agree that I don't take responsibility for any misuse of your token. If you're worried, reset it by creating a new one <a href="https://api.up.com.au/getting_started/" className="text-primary" title="Reset your Personal Access Token." target="_blank" rel="noreferrer">here.</a></p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}