import * as core from '@actions/core'
import * as github from '@actions/github'
import { Context } from '@actions/github/lib/context';

async function action(context: Context = github.context) {
    try {
        const originalChangelog = core.getInput('changelog')

        core.setOutput('changelog', clear(originalChangelog));
    } catch (error) {
        // @ts-ignore
        core.setFailed(error.message);
    }

}

function clear(input: string = '') : string {
    return input.replace(
        /((feat|refactor|docs|perf|fix|test|style|build)\(?.+\):)|((feat|refactor|docs|perf|fix|test|style|build):)/g,
        ''
    ).trim()
}

export default action;
