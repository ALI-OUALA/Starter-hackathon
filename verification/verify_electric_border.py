from playwright.sync_api import sync_playwright

def verify_electric_border():
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        page = browser.new_page()
        try:
            print("Navigating to home page...")
            page.goto("http://localhost:3000")
            page.wait_for_load_state("networkidle")

            # Wait for Features section to be visible (it has animation)
            # "Why Join STARTER?" is in Features section
            print("Waiting for Features section...")
            features_heading = page.get_by_role("heading", name="Why Join STARTER?")
            features_heading.scroll_into_view_if_needed()
            # Wait a bit for animations to settle/start
            page.wait_for_timeout(2000)

            # Take screenshot of the features area
            print("Taking screenshot...")
            page.screenshot(path="verification/electric_border_features.png")
            print("Screenshot saved to verification/electric_border_features.png")

        except Exception as e:
            print(f"Error: {e}")
        finally:
            browser.close()

if __name__ == "__main__":
    verify_electric_border()
