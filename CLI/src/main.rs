///
/// ディレクトリーのパスを取得します。
///
pub fn pwd() -> String {
    let current_dir = std::env::current_dir().unwrap();
    current_dir.to_str().unwrap().to_string()
}

///
/// ディレクトリーを移動します。
///
pub fn cd(path: &str) {
    std::env::set_current_dir(path).unwrap();
}

///
/// ディレクトリーを復帰するための構造体
///
pub struct DirectoryRecovery {
    original_location: String,
}

impl DirectoryRecovery {
    ///
    /// 新しいインスタンスを返します。
    ///
    pub fn new() -> DirectoryRecovery {
        DirectoryRecovery {
            original_location: pwd(),
        }
    }

    ///
    /// ディレクトリーを復帰します。
    ///
    pub fn recover(&self) {
        println!("Recovering directory: {}", self.original_location);
        cd(&self.original_location);
    }
}

///
/// 指定されたタイムゾーンで現在のタイムスタンプを返します。
///
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

///
/// 現在のタイムスタンプを返します。
///
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

///
/// テキストファイル全体を読み込みます。
///
fn read_rext_file(path: &str) -> Result<String, Box<dyn std::error::Error>> {
    let content = std::fs::read_to_string(path)?;
    Ok(content)
}

///
/// タイムスタンプの差し替え
///
fn update_timestamp_file() -> Result<(), Box<dyn std::error::Error>> {
    let _recovery = DirectoryRecovery::new();

    // ワークスペースのルートに移動
    cd("..");

    let original_content = read_rext_file("src/lib/utils.tsx")?;

    let original_content =
        original_content.replace("{{build_timestamp}}", &get_current_timestamnp_by(9));

    let file_path = "src/lib/utils.tsx";
    std::fs::write(file_path, original_content)?;

    Ok(())
}

///
/// Rust アプリケーションのエントリーポイント
///
fn main() {
    let result = update_timestamp_file();
    if result.is_err() {
        eprintln!("Error: {}", result.err().unwrap());
        std::process::exit(1);
    }
}
