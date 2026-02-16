from playwright.sync_api import sync_playwright

def run():
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        page = browser.new_page()

        # Navigate to the home page
        page.goto("http://localhost:3000/")

        # Wait for the blob to be visible (it's in the background, so maybe just wait a bit)
        page.wait_for_timeout(2000)

        # Take a screenshot of the whole page
        page.screenshot(path="verification/blob_verification.png", full_page=True)

        browser.close()

if __name__ == "__main__":
    run()
