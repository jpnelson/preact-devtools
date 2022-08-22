import { newTestPage, getCount, clickAndWaitForHooks } from "../../test-utils";
import { expect } from "chai";
import { clickNestedText, getAttribute } from "pentf/browser_utils";
import { waitForPass } from "pentf/assert_utils";
import { wait } from "pentf/utils";

export const description = "Inspect custom hooks";

export async function run(config: any) {
	const { devtools } = await newTestPage(config, "hooks");

	const hooksPanel = '[data-testid="props-row"]';

	// CutomHook
	await clickAndWaitForHooks(devtools, "CustomHooks3");

	const isCollapsed = await getAttribute(
		devtools,
		`${hooksPanel} button`,
		"data-collapsed",
	);
	expect(isCollapsed).to.equal("true");
	expect(await getCount(devtools, hooksPanel)).to.equal(2);

	await waitForPass(async () => {
		await clickNestedText(devtools, "useBoof");
		await wait(200);
		expect(await getCount(devtools, hooksPanel)).to.equal(3);
	});

	await waitForPass(async () => {
		await clickNestedText(devtools, "useBob");
		await wait(200);
		expect(await getCount(devtools, hooksPanel)).to.equal(4);
	});

	await waitForPass(async () => {
		await clickNestedText(devtools, "useFoo");
		await wait(200);
		expect(await getCount(devtools, hooksPanel)).to.equal(5);
	});

	await waitForPass(async () => {
		await clickNestedText(devtools, "useBar");
		await wait(200);
		expect(await getCount(devtools, hooksPanel)).to.equal(7);
	});
}
