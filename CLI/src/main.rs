pub fn pwd() -> String {
    let current_dir = std::env::current_dir().unwrap();
    current_dir.to_str().unwrap().to_string()
}

pub fn cd(path: &str) {
    std::env::set_current_dir(path).unwrap();
}

pub struct DirectoryRecovery {
    original_location: String,
}

impl DirectoryRecovery {
    pub fn new() -> DirectoryRecovery {
        DirectoryRecovery {
            original_location: pwd(),
        }
    }

    pub fn recover(&self) {
        println!("Recovering directory: {}", self.original_location);
        cd(&self.original_location);
    }
}

/// 指定されたタイムゾーンで現在のタイムスタンプを返します。
pub fn get_current_timestamnp_by(hours: i64) -> String {
    let now = chrono::Utc::now();
    let local_time = now + chrono::Duration::hours(hours);
    // +#03 -> 符号付き、最低3桁を確保する、0埋め、整数
    let text = format!(
        "{}{:+#03}:00",
        local_time.format("%Y-%m-%dT%H:%M:%S%.3f"),
        hours
    );
    return text;
}

pub fn get_current_timestamp() -> String {
    let now = chrono::Utc::now();
    // ミリ秒までフォーマット
    return now.format("%Y-%m-%d %H:%M:%S%.3f").to_string();
}

impl Drop for DirectoryRecovery {
    fn drop(&mut self) {
        self.recover();
    }
}

fn read_rext_file(path: &str) -> Result<String, Box<dyn std::error::Error>> {
    let content = std::fs::read_to_string(path)?;
    Ok(content)
}

fn update_timestamp_file() -> Result<(), Box<dyn std::error::Error>> {
    let _recovery = DirectoryRecovery::new();

    cd("..");

    let original_content = read_rext_file("src/lib/utils.tsx")?;

    let original_content =
        original_content.replace("{{build_timestamp}}", &get_current_timestamnp_by(9));

    let file_path = "src/lib/utils.tsx";
    std::fs::write(file_path, original_content)?;

    Ok(())
}

fn main() {
    let result = update_timestamp_file();
    if result.is_err() {
        eprintln!("Error: {}", result.err().unwrap());
        std::process::exit(1);
    }
}
