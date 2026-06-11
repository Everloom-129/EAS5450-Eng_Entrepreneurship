$ErrorActionPreference = "Stop"
if (Get-Variable -Name PSNativeCommandUseErrorActionPreference -ErrorAction SilentlyContinue) {
  $PSNativeCommandUseErrorActionPreference = $false
}

$root = Resolve-Path (Join-Path $PSScriptRoot "..")
$outDir = Join-Path $root "image\blog"
$tmpDir = Join-Path $outDir ".tmp"
New-Item -ItemType Directory -Force -Path $outDir, $tmpDir | Out-Null

$chrome = "C:\Program Files\Google\Chrome\Application\chrome.exe"
$pdftoppm = "pdftoppm.exe"
$curl = "C:\Windows\System32\curl.exe"
$userAgent = "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 Chrome/125 Safari/537.36"

$items = @(
  @{
    slug = "lec00-introduction"
    mode = "screenshot"
    url = "https://eent.seas.upenn.edu/academics/eas-5450/"
    title = "Penn Engineering EAS 5450 course page"
    note = "Official course page listing topics, readings, cases, and assignments."
  },
  @{
    slug = "lec01-dna-of-innovations"
    mode = "screenshot"
    url = "https://www.innovatorsdna.com/research-origins"
    title = "Innovator's DNA research origins"
    note = "Public Innovator's DNA page describing the five discovery skills."
  },
  @{
    slug = "lec02-winning-strategy"
    mode = "screenshot"
    url = "https://news.microsoft.com/source/2001/01/23/microsoft-frontpage-surpasses-5-million-usersleading-web-development-tool-user-base-grows-more-than-40-percent-during-last-year/"
    title = "Microsoft FrontPage press release"
    note = "Official Microsoft page referencing the Vermeer/FrontPage acquisition path."
  },
  @{
    slug = "lec03-palm-and-ip"
    mode = "screenshot"
    url = "https://patents.google.com/patent/US6295372B1/en"
    title = "Palm handwriting input patent"
    note = "Google Patents page for Palm-related handwriting recognition IP."
  },
  @{
    slug = "lec04-innovation-sales-learning-curve"
    mode = "screenshot"
    url = "https://sequoiacap.com/article/the-sales-learning-curve/"
    title = "Sequoia: The Sales Learning Curve"
    note = "Public Sequoia article preserving Mark Leslie's sales learning curve framework."
  },
  @{
    slug = "lec05-innovation-cash-and-pilot"
    mode = "image"
    url = "https://commons.wikimedia.org/wiki/Special:Redirect/file/PalmPilot_Professional.jpg"
    title = "PalmPilot Professional photo"
    note = "Wikimedia Commons image of a 3Com PalmPilot Professional."
    extension = "jpg"
  },
  @{
    slug = "lec06-customer-discovery"
    mode = "screenshot"
    url = "https://www.nsf.gov/funding/initiatives/i-corps/about-i-corps"
    title = "NSF I-Corps customer discovery"
    note = "Official NSF description of I-Corps customer discovery."
  },
  @{
    slug = "lec07-lean-startup-dropbox"
    mode = "image"
    url = "https://commons.wikimedia.org/wiki/Special:Redirect/file/Lean-StartUp-Cycle-EN.jpg"
    title = "Lean startup learning cycle"
    note = "Wikimedia Commons diagram of the lean startup cycle."
    extension = "jpg"
  },
  @{
    slug = "lec08-market-strategy"
    mode = "image"
    url = "https://commons.wikimedia.org/wiki/Special:Redirect/file/Marketing_Mix_4P.svg"
    title = "Marketing Mix 4P diagram"
    note = "Wikimedia Commons Creative Commons diagram of the 4 Ps marketing mix."
    extension = "svg"
  },
  @{
    slug = "lec09-finance-strategy-linkedin"
    mode = "screenshot"
    url = "https://www.sec.gov/Archives/edgar/data/1271024/000119312511016022/ds1.htm"
    title = "LinkedIn S-1 registration statement"
    note = "SEC EDGAR filing for LinkedIn's IPO registration statement."
  },
  @{
    slug = "lec10-business-model-canvas-dell"
    mode = "screenshot"
    url = "https://www.strategyzer.com/library/the-business-model-canvas"
    title = "Strategyzer Business Model Canvas"
    note = "Official Strategyzer page for the Business Model Canvas template."
  },
  @{
    slug = "lec11-venture-finance-bootstrap"
    mode = "screenshot"
    url = "https://nvca.org/pitchbook-nvca-venture-monitor/"
    title = "PitchBook-NVCA Venture Monitor"
    note = "NVCA report hub for U.S. venture capital market data."
  },
  @{
    slug = "lec12-convertible-notes-safes"
    mode = "screenshot"
    url = "https://www.ycombinator.com/documents"
    title = "Y Combinator SAFE financing documents"
    note = "Official YC page for SAFE financing document downloads."
  },
  @{
    slug = "lec13-negotiate-vc-term-sheets"
    mode = "screenshot"
    url = "https://nvca.org/model-legal-documents/"
    title = "NVCA model legal documents"
    note = "NVCA's public model financing document hub."
  },
  @{
    slug = "lec14-ipo-facebook"
    mode = "screenshot"
    url = "https://www.sec.gov/Archives/edgar/data/1326801/000119312512034517/d287954ds1.htm"
    title = "Facebook S-1 registration statement"
    note = "SEC EDGAR filing for Facebook's IPO registration statement."
  },
  @{
    slug = "lec15-open-innovation-palm-finance"
    mode = "pdf"
    url = "https://www.nasa.gov/wp-content/uploads/2022/01/fy1920openinnovationreport-final.pdf"
    title = "NASA Open Innovation report"
    note = "Public NASA report on open innovation programs and challenge models."
  },
  @{
    slug = "lec16-guest-ross-mechanic-maybern"
    mode = "screenshot"
    url = "https://www.maybern.com/about-us"
    title = "Maybern about page"
    note = "Official Maybern page describing its fund accounting software approach."
  },
  @{
    slug = "lec17-disruptive-innovation-genapsys"
    mode = "screenshot"
    url = "https://www.genome.gov/about-genomics/fact-sheets/DNA-Sequencing-Costs-Data"
    title = "NHGRI DNA sequencing cost data"
    note = "National Human Genome Research Institute data page for sequencing cost curves."
  },
  @{
    slug = "lec18-guest-julia-omara-pickle"
    mode = "screenshot"
    url = "https://www.shoponpickle.com/about"
    title = "Pickle about page"
    note = "Official Pickle page showing the product, founders, and circular fashion model."
  },
  @{
    slug = "lec19-equity-splits-sweat-equity-nanogene"
    mode = "pdf"
    url = "https://assets.ctfassets.net/y88td1zx1ufe/5zYTlz3gdNzuFU7fQS5gjh/fbe271b0fbb5947e0223757d73254bb5/Founder_Ownership_Report.pdf"
    title = "Carta Founder Ownership Report"
    note = "Carta data report on founder ownership and equity split patterns."
  },
  @{
    slug = "lec20-guest-tobias-dengel-willowtree"
    mode = "screenshot"
    url = "https://www.sec.gov/Archives/edgar/data/868675/000110465923001302/tm231725d1_ex99-1.htm"
    title = "TELUS International completes WillowTree acquisition"
    note = "SEC filing exhibit containing TELUS International's WillowTree acquisition release."
  },
  @{
    slug = "lec21-fda-sirtris"
    mode = "screenshot"
    url = "https://www.fda.gov/drugs/information-consumers-and-patients-drugs/fda-drug-approval-process-infographic-horizontal"
    title = "FDA drug approval process infographic"
    note = "Official FDA infographic page for the drug approval process."
  },
  @{
    slug = "lec22-guest-miranda-wang-novoloop"
    mode = "screenshot"
    url = "https://www.novoloop.com/about"
    title = "Novoloop about page"
    note = "Official Novoloop page explaining its plastic upcycling platform."
  },
  @{
    slug = "lec22b-special-panel-penn-eng-entrepreneurship"
    mode = "screenshot"
    url = "https://penntoday.upenn.edu/events/generative-ai-and-entrepreneurship"
    title = "Penn Today: Generative AI and Entrepreneurship"
    note = "Penn Today event page for Penn Engineering Entrepreneurship's 25th anniversary programming."
  },
  @{
    slug = "lec23-level5-leadership-spoiled-mips"
    mode = "screenshot"
    url = "https://www.jimcollins.com/concepts/level-five-leadership.html"
    title = "Jim Collins Level 5 Leadership"
    note = "Official Jim Collins concept page for Level 5 Leadership."
  },
  @{
    slug = "lec24-hiring-incentives-sun"
    mode = "image"
    url = "https://commons.wikimedia.org/wiki/Special:Redirect/file/Sun-Logo.svg"
    title = "Sun Microsystems logo"
    note = "Wikimedia Commons public-domain text/logo file for Sun Microsystems."
    extension = "svg"
  },
  @{
    slug = "lec25-leveraging-culture-scaling-n12"
    mode = "pdf"
    url = "https://www.compositesworld.com/cdn/cms/FM2016-N12-NanoStitch.pdf"
    title = "N12 NanoStitch technical handout"
    note = "Public technical PDF for N12 NanoStitch carbon nanotube composite material."
  },
  @{
    slug = "lec26-theranos"
    mode = "screenshot"
    url = "https://www.sec.gov/newsroom/press-releases/2018-41"
    title = "SEC press release charging Theranos and Elizabeth Holmes"
    note = "SEC press release covering Theranos fraud allegations and enforcement action."
  },
  @{
    slug = "lec27-managers-leaders-schumpeter"
    mode = "image"
    url = "https://commons.wikimedia.org/wiki/Special:Redirect/file/Joseph_Schumpeter_1945_Bachrach_portrait.png"
    title = "Joseph Schumpeter portrait"
    note = "Wikimedia Commons public-domain portrait of Joseph Schumpeter."
    extension = "png"
  },
  @{
    slug = "lec28a-personal-financial-foresight"
    mode = "screenshot"
    url = "https://www.federalreserve.gov/econres/scfindex.htm"
    title = "Federal Reserve Survey of Consumer Finances"
    note = "Federal Reserve page for the Survey of Consumer Finances and chartbook."
  }
)

function Invoke-Screenshot($item, $path) {
  $args = @(
    "--headless=new",
    "--disable-gpu",
    "--hide-scrollbars",
    "--no-first-run",
    "--disable-features=Translate,MediaRouter",
    "--window-size=1600,1000",
    "--screenshot=$path",
    $item.url
  )
  $stdoutPath = Join-Path $tmpDir "$($item.slug).chrome.out"
  $stderrPath = Join-Path $tmpDir "$($item.slug).chrome.err"
  Start-Process -FilePath $chrome -ArgumentList $args -Wait -PassThru -WindowStyle Hidden -RedirectStandardOutput $stdoutPath -RedirectStandardError $stderrPath | Out-Null
  Start-Sleep -Milliseconds 500
}

function Invoke-ImageDownload($item, $path) {
  & $curl -L --fail --silent --show-error -A $userAgent -o $path $item.url
}

function Invoke-PdfRender($item, $path) {
  $pdfPath = Join-Path $tmpDir "$($item.slug).pdf"
  & $curl -L --fail --silent --show-error -A $userAgent -o $pdfPath $item.url
  $base = Join-Path $tmpDir $item.slug
  & $pdftoppm -png -singlefile -f 1 -l 1 -r 150 $pdfPath $base
  Move-Item -Force "$base.png" $path
}

$manifest = @()
foreach ($item in $items) {
  $ext = if ($item.extension) { $item.extension } else { "png" }
  $fileName = "$($item.slug).$ext"
  $path = Join-Path $outDir $fileName

  Write-Host "Fetching $fileName"
  Get-ChildItem -Path $outDir -File -Filter "$($item.slug).*" | Remove-Item -Force
  if ($item.mode -eq "screenshot") {
    Invoke-Screenshot $item $path
  } elseif ($item.mode -eq "image") {
    Invoke-ImageDownload $item $path
  } elseif ($item.mode -eq "pdf") {
    Invoke-PdfRender $item $path
  } else {
    throw "Unknown mode $($item.mode)"
  }

  if (!(Test-Path $path)) {
    throw "Failed to create $path"
  }

  $manifest += [ordered]@{
    slug = $item.slug
    file = "image/blog/$fileName"
    sourceTitle = $item.title
    sourceUrl = $item.url
    captureMode = $item.mode
    note = $item.note
  }
}

$manifestPath = Join-Path $outDir "sources.json"
$manifest | ConvertTo-Json -Depth 4 | Set-Content -Encoding UTF8 $manifestPath
Remove-Item -Recurse -Force $tmpDir
Write-Host "Wrote $($items.Count) image assets and $manifestPath"
