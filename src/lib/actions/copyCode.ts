export function copyCode(node: HTMLElement) {
	function attachButtons() {
		node.querySelectorAll('pre').forEach((pre) => {
			if (pre.parentElement?.classList.contains('code-wrapper')) return;

			const wrapper = document.createElement('div');
			wrapper.className = 'code-wrapper';
			pre.parentNode?.insertBefore(wrapper, pre);
			wrapper.appendChild(pre);

			const btn = document.createElement('button');
			btn.className = 'copy-btn';
			btn.setAttribute('aria-label', 'Copy code');
			btn.textContent = 'Copy';
			wrapper.appendChild(btn);

			btn.addEventListener('click', async () => {
				const text = pre.querySelector('code')?.textContent ?? '';
				await navigator.clipboard.writeText(text);
				btn.textContent = 'Copied!';
				setTimeout(() => (btn.textContent = 'Copy'), 2000);
			});
		});
	}

	attachButtons();
}
