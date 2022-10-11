#![cfg_attr(
    all(not(debug_assertions), target_os = "windows"),
    windows_subsystem = "windows"
)]

// Learn more about Tauri commands at https://tauri.app/v1/guides/features/command
#[tauri::command]
fn greet(name: &str) -> String {
    format!("Hello, {}! You've been greeted from Rust!", name)
}

use tauri::{Window, WindowBuilder, WindowUrl, generate_handler};

#[tauri::command]
async fn close_options(handle: tauri::AppHandle) {
    let window = handle.get_window("options").unwrap();
    window.hide().unwrap();
}
use window_shadows::set_shadow;
use tauri::{
    api::dialog::ask, http::ResponseBuilder, AppHandle, GlobalShortcutManager, Manager, RunEvent,
};

use tauri::{CustomMenuItem, SystemTrayMenu, SystemTrayMenuItem};
use tauri::{SystemTray, SystemTrayEvent};

fn main() {
    let quit = CustomMenuItem::new("quit".to_string(), "Quit");
    let hide = CustomMenuItem::new("hide".to_string(), "Hide");
    let options = CustomMenuItem::new("options".to_string(), "Options");
    let tray_menu = SystemTrayMenu::new()
        .add_item(options)
        .add_native_item(SystemTrayMenuItem::Separator)
        .add_item(hide)
        .add_native_item(SystemTrayMenuItem::Separator)
        .add_item(quit);
    let system_tray = SystemTray::new().with_menu(tray_menu);

    let mut app = tauri::Builder::default()
        .invoke_handler(generate_handler![close_options])
        .system_tray(system_tray)
        .on_system_tray_event(|app, event| match event {
            SystemTrayEvent::MenuItemClick { id, .. } => {
                let item_handle = app.tray_handle().get_item(&id);
                match id.as_str() {
                    "quit" => {
                        std::process::exit(0);
                    }
                    "hide" => {
                        let window = app.get_window("main").unwrap();
                        if window.is_visible().unwrap() == true {
                            window.hide().unwrap();
                            item_handle.set_title("Show").unwrap();
                        } else {
                            window.show().unwrap();
                            item_handle.set_title("Hide").unwrap();
                        }

                        // you can also `set_selected`, `set_enabled` and `set_native_image` (macOS only).
                    }

                    "options" => {
                        let window = app.get_window("options").unwrap();
                        window.show().unwrap();
                    }

                    _ => {}
                }
            }
            _ => {}
        })
        .build(tauri::generate_context!())
        .expect("error while building tauri application")
        .run(|_app_handle, event| match event {
            RunEvent::Ready { .. } => {
                let app_handle = _app_handle.clone();
                let window = app_handle.get_window("main").unwrap();
                let optwindow = app_handle.get_window("options").unwrap();
                set_shadow(optwindow, true).expect("Unsupported OS!");
                app_handle
                    .global_shortcut_manager()
                    .register("CmdOrCtrl+Shift+h", move || {
                        if window.is_visible().unwrap() {
                            window.hide().unwrap();
                        } else {
                            window.show().unwrap();
                        }
                    })
                    .expect("Failed to register global shortcut");
            }

            RunEvent::ExitRequested { api, .. } => api.prevent_exit(),
            _ => {}
        });
}
